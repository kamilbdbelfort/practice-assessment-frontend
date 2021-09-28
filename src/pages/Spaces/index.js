import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";

import { getAllSpaces } from "../../store/spaces/actions";
import {
  selectSpacesLoading,
  selectAllSpaces,
} from "../../store/spaces/selectors";
import SpaceCard from "../../components/SpaceCard";

// import css

export default function Spaces() {
  const dispatch = useDispatch();

  const loading = useSelector(selectSpacesLoading);
  const spaces = useSelector(selectAllSpaces);
  console.log("spaces", spaces);

  useEffect(() => {
    dispatch(getAllSpaces());
  }, [dispatch]);

  return (
    <Jumbotron>
      <h1>Spaces</h1>

      <div className="Spaces">
        {spaces.map((space) => {
          return <SpaceCard key={space.id} />;
        })}
      </div>
    </Jumbotron>
  );
}
