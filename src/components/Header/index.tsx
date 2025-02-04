import { useEffect, useState } from "react";
import * as S from "./styles";
import { FiSearch, FiBell } from "react-icons/fi";
import { client } from "../../services/api/api_client";
import { User } from "../../interfaces/components/header.inteface";
import { endpoints } from "../../services/api/endpoints";

function Header() {
  const [user, setUser] = useState<User>();
  const [hour, setHour] = useState(new Date());

  const handleGetUserInformations = async (): Promise<User> => {
    try {
      const { data } = await client.get<User>(endpoints.GET_USER_INFORMATIONS);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await handleGetUserInformations();

      console.log(user);
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
        <S.UserAvatarContainer src={user?.avatar} />
        <S.UserInformationsContainer>
          <p>{user && user.name}</p>
          <p>{user && user.email}</p>
        </S.UserInformationsContainer>
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
