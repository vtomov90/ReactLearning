
function List(){
    const fruits = ["applse", "orange", "banana", "cocnut", "pineapple"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return(<uL>{listItems}</uL>);
}
export default List