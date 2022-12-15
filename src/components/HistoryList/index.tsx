import HistoryItem from "@components/HistoryItem";
import { IHistoryItem } from "@tps/history";
import { FC } from "react";

interface Props {
  list: IHistoryItem[];
}

const HistoryList: FC<Props> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <HistoryItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default HistoryList;
