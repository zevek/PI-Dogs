import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";
import Pagination from "../Pagination/Pagination";
import SideBar from "../../pages/SideBar/SideBar";
import NavBar from "../../pages/NavBar/NavBar";
import { getDogs } from "../../redux/actions/actions";

function CardsContainer() {
  //       pagination     <<<<<<<<<<<<<<<<<
  const storedDogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const lastDogIndex = currentPage * dogsPerPage;
  const firstDogIndex = lastDogIndex - dogsPerPage;
  const currentDogs = storedDogs.slice(firstDogIndex, lastDogIndex);
  


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <>
    <NavBar/>
    <SideBar/>
      <ul className={styles.container}>
        {currentDogs.map((dog) => (
          <li key={dog.id}>
            <Card dog={dog} />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalDogs={storedDogs.length}
        dogsPerPage={dogsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default CardsContainer;
