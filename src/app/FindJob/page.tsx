import HeaderPrivate from "@/components/HeaderPrivate/HeaderPrivate";
import React from "react";
import { styles } from "./styles";
import JobsFilter from "@/components/JobsFilter/JobsFilter";

export default function page() {
  return (
    <>
      <HeaderPrivate />
      <div className={styles.ContainerHome}>
        <JobsFilter />
      </div>
    </>
  );
}
