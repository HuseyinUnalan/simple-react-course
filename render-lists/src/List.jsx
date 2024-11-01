function List() {

  // fruits.sort((a, b) => a.name.localeCompare(b.name)) //Alfabetik sıralama için
  fruits.sort((a, b) => a.calories - b.calories) //Sayıya göre sıralama için

  const lowCalFruit = fruits.filter(fruit => fruit.calories < 100); //100 kaloriden aşağı olanları göstermesi için fruit olan yerleri lowCalFruit ile değiştirmek gerekiyor
  
  const listItems = fruits.map(fruit =>
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>);

  return (<ol>{listItems}</ol>);
}

export default List;