import styled from "styled-components";

export const UserContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
  border-right: 1px solid #efefef;
  padding-right: 20px;
`;

export const UserAvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  -webkit-box-shadow: 6px 8px 79px -14px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 8px 79px -14px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 8px 79px -14px rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;

export const UserAvatarBadge = styled.span``;

export const UserInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Container = styled.header`
  display: flex;
  background-color: #ffff;
  height: 80px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchBarContainer = styled.span`
  border: 1px solid #efefef;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  margin: 0 20px;
  flex: 1;
  height: 45px;
`;

export const SearchBarInput = styled.input`
  border: none;
  padding: 10px;
  outline: none;
  width: 95%;
`;

export const TimerContainer = styled.div`
  border-left: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 30px;

  & > p {
    font-size: 30px;
    font-weight: bold;
  }
`;

export const NotificationsContainer = styled.div`
  border-left: 1px solid #efefef;
  padding: 0 30px;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const NotificationButton = styled.span`
  border: 1px solid #efefef;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
  }

  span {
    position: absolute;
    top: 15px;
    right: 40px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  top: 85px;
  left: 9px;
  width: 260px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-radius: 10px;
`;

export const UserMenuBasicInformations = styled.section`
  display: flex;
  padding: 10px;
  gap: 15px;
`;

export const UserMenuNameAndEmail = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  svg {
    margin-right: 10px;
  }
`;
