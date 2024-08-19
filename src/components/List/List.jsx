import './List.scss'
import { listData } from './../../lib/DummyData';
import Card from '../Card/Card';

function List(){
  return (
    <div className='list'>
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List