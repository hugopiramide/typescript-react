import type { ListItemType } from '../ListItem/ListItem'
import ListItem from '../ListItem/ListItem'
import './List.css'

type ListProps = {
    items: ListItemType[]
}

const List = ({ items }:ListProps ) => {
    return (
        <section className='items'>
            {items.map((item, index) => (
                <ListItem key={`item-${index}`} item={item} />
                ))}
        </section>
    )
}

export default List