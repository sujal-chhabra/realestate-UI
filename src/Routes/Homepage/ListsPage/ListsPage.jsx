import React from 'react'
import "./ListPage.scss";
import { listData } from '../../../lib/DummyData'
import Filter from '../../../components/Filter/Filter';
import Card from '../../../components/Card/Card';
import Map from '../../../components/Map/Map';

const ListsPage = () => {
  const data = listData;

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter/>
        {data.map(item=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
    <div className="mapContainer">
    <Map items={data}/>
    </div>
  </div>;
}

export default ListsPage