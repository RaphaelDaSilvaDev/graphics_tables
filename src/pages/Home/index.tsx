import { FiUser } from "react-icons/fi";
import { AiFillDashboard } from "react-icons/ai";

import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <S.Card>
          <FiUser size={40} color="#292929" onClick={() => navigate("users")} />
          <span>User</span>
        </S.Card>
        <S.Card>
          <AiFillDashboard size={40} color="#292929" onClick={() => navigate("dashboard")} />
          <span>Dashboard</span>
        </S.Card>
      </S.Content>
    </S.Container>
  );
}
