

function List(props){
    
    const itemList = props.items;
    itemList.sort();
    const listItems = itemList.map( fruit => <li key={fruit}>{fruit}</li> );
    return listItems;
}

export default List
