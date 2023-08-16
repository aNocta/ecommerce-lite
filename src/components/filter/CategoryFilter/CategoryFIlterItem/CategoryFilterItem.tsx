"use client";
import { ChangeEvent, FC } from "react";
import { ICatergoriesListItem } from "./CategoryFilterItem.type";
import styles from "./CategoryFilterItem.module.scss";
import { useDispatch } from "react-redux";
import { addFilterCategory, removeFilterCategory } from "@/store";

const CategoryFilterItem: FC<ICatergoriesListItem> = ({ name, isActive }) => {
  const dp = useDispatch();
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.currentTarget.checked;
    checked && dp(addFilterCategory(name));
    !checked && dp(removeFilterCategory(name));
  };
  return (
    <div
      className={`${styles.category} flex items-center justify-between p-[1vmin]`}
    >
      <input
        onChange={changeInput}
        type="checkbox"
        name={name}
        checked={isActive}
      />
      <label className="text-lg ml-[1vmin]" htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

export default CategoryFilterItem;
