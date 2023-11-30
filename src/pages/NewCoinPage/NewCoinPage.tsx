import { useParams } from "react-router-dom";
import NewCoinForm from "../../features/coin/NewCoinForm/NewCoinForm";

function NewCoinPage() {
  const { collectionId } = useParams();
  return <NewCoinForm collectionId={collectionId as string} />;
}

export default NewCoinPage;
