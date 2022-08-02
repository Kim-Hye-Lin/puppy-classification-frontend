import React, { useCallback, useEffect, useState } from 'react';
import { customAxios } from '../common/CustomAxios';
import { CardItem } from './CardItem';
import styled from 'styled-components';
import { Pagination } from './Pagination';

interface Response {
  data: Data[];
}
export interface Data {
  id: number;
  size: number;
  name: string;
  img_url: string;
}

function CardList({ size }: any) {
  const [data, setData] = useState<Data[]>();
  // page처음 null
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const handlePages = (updatePage: number) => setPage(updatePage);

  const getData = async (size: any, page: number) => {
    let res = await customAxios.get<Response>(`/puppies?size=${size}&page=${page}`);
    let { data } = res.data;
    setData(data);
    // size 확인용
    console.log(size);
  };
  useEffect(() => {
    getData([size], page);
  }, [size, page]);

  return (
    <Common>
      {data && data.map(data => <CardItem key={data.id} data={data} />)}
      <Common>
        <Pagination page={page} totalPages={totalPages} handlePagination={handlePages} />
      </Common>
    </Common>
  );
}
const Common = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70rem;
  gap: 3rem 1.3rem;
  flex-grow: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  margin: 3rem auto;
  flex-direction: row;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 45rem;
    gap: 2rem 1rem;
  }
  @media all and (max-width: 767px) {
    width: 20rem;
  }
`;
export default CardList;
