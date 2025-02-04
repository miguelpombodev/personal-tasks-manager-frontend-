import { useEffect, useState, useRef } from "react";
import * as S from "./styles";
import { FiSearch, FiBell, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { client } from "../../services/api/api_client";
import { UserResponse } from "../../interfaces/responses/user.interface";
import { endpoints } from "../../services/api/endpoints";
import User from "../../models/User.model";

function Header() {
  const [user, setUser] = useState<User>();
  const [hour, setHour] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleGetUserInformations = async (): Promise<User> => {
    try {
      const { data } = await client.get<UserResponse>(
        endpoints.GET_USER_INFORMATIONS,
      );

      const user = new User(data);

      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await handleGetUserInformations();
      setUser(user);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHour(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const formatarNumero = (numero: number): string => {
    return numero.toString().padStart(2, "0");
  };

  const getWholeStringfiedDate = (date: Date): string => {
    const month = date.toLocaleDateString("pt-BR", { month: "long" });
    const day = date.toLocaleDateString("pt-BR", { day: "numeric" });
    const dayName = date.toLocaleDateString("pt-BR", { weekday: "long" });
    return `${dayName}, ${day} de ${month}`;
  };

  return (
    <S.Container>
      <S.UserContainer>
        <S.UserAvatarContainer onClick={() => setMenuOpen(!menuOpen)}>
          {!user?.avatar ? (
            <S.UserAvatarBadge>{`${user?.firstName[0]}${user?.lastName[0]}`}</S.UserAvatarBadge>
          ) : (
            <img src={user?.avatar} />
          )}
        </S.UserAvatarContainer>

        {menuOpen && (
          <S.UserMenu ref={menuRef}>
            <S.UserMenuBasicInformations>
              <S.UserAvatarContainer onClick={() => setMenuOpen(!menuOpen)}>
                {!user?.avatar ? (
                  <S.UserAvatarBadge>{`${user?.firstName[0]}${user?.lastName[0]}`}</S.UserAvatarBadge>
                ) : (
                  <img src={user?.avatar} />
                )}
              </S.UserAvatarContainer>
              <S.UserMenuNameAndEmail>
                <p>{`${user?.firstName} ${user?.lastName}`}</p>
                <p>{user?.email}</p>
              </S.UserMenuNameAndEmail>
            </S.UserMenuBasicInformations>
            <S.UserMenuItem>
              <FiUser /> Perfil
            </S.UserMenuItem>
            <S.UserMenuItem>
              <FiSettings /> Configurações
            </S.UserMenuItem>
            <S.UserMenuItem onClick={() => console.log("Logout")}>
              <FiLogOut /> Sair
            </S.UserMenuItem>
          </S.UserMenu>
        )}
      </S.UserContainer>

      <S.SearchBarContainer>
        <FiSearch size={20} />
        <S.SearchBarInput type="text" />
      </S.SearchBarContainer>

      <S.TimerContainer>
        <p>
          {formatarNumero(hour.getHours())}:{formatarNumero(hour.getMinutes())}
        </p>
        <span>{getWholeStringfiedDate(hour)}</span>
      </S.TimerContainer>

      <S.NotificationsContainer>
        <S.NotificationButton>
          <FiBell />
          <span>3</span>
        </S.NotificationButton>
      </S.NotificationsContainer>
    </S.Container>
  );
}

export default Header;
