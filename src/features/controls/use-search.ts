import {useSelector} from 'react-redux';
import {selectSearch} from './controls-selectors';
import { setSearch } from './controls-slice';
import {useAppDispatch} from "../../store";
import {ChangeEventHandler} from "react";

type onSearch = ChangeEventHandler<HTMLInputElement>


export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return [search, handleSearch];
}
