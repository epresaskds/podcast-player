import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EpisodeListProps from "../../_types/EpisodeList";

const Span = styled.span`
  font-size: 14px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 5px;
  &:nth-child(even) {
    background-color: var(--color-gray-light);
  }
`;
const ReleaseDate = styled(Span)`
  text-align: center;
  flex: 1;
`;
const Title = styled(Span)`
  flex: 3;
  margin-right: auto;
`;
const Duration = styled(Span)`
  text-align: center;
  flex: 1;
`;
const TitleLink = styled(Link)`
  text-decoration: none;
  color: var(--color-blue-primary);
`;

const EpisodeList = ({ episodes }: EpisodeListProps) => {
  // const [rowData] = useState(
  //   episodes?.map((episode) => ({
  //     title: episode.trackName,
  //     date: episode.releaseDate,
  //     duration: episode.trackTimeMillis,
  //     id: episode.trackId,
  //   }))
  // );

  // const [columnDefs] = useState([
  //   { field: "title", cellRenderer: EpisodeLink },
  //   { field: "date" },
  //   { field: "duration" },
  // ]);

  const convertDate = (timeStamp: string) => {
    const pad = (s: number) => (s < 10 ? `0${s}` : s);
    var d = new Date(timeStamp);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  };

  return (
    // <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
    //   <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    // </div>
    <>
      <List>
        {episodes?.map(
          ({ trackName, releaseDate, trackTimeMillis, trackId }) => (
            //   {
            //   title: episode.trackName,
            //   date: episode.releaseDate,
            //   duration: episode.trackTimeMillis,
            //   id: episode.trackId,
            // }
            <ListItem key={trackId}>
              <Title>
                <TitleLink to={`episode/${trackId}`}>{trackName}</TitleLink>
              </Title>
              <ReleaseDate>{convertDate(releaseDate)}</ReleaseDate>
              <Duration>
                {new Date(trackTimeMillis).toISOString().slice(11, 19)}
              </Duration>
            </ListItem>
          )
        )}
      </List>
    </>
  );
};

export default EpisodeList;
