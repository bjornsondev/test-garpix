export default function getCategoryList() {
  return {
    listShort: [
      {name: "Все партнеры", id: "all", isCurrent: true}, 
      {name: "Популярные", id: "popular", isCurrent: false}, 
      {name: "Супермаркеты", id: "shop", isCurrent: false}, 
      {name: "Кафе и рестораны", id: "food", isCurrent: false}, 
      {name: "Такси", id: "taxi", isCurrent: false}, 
      {name: "Красота", id: "beauty", isCurrent: false}, 
      {name: "Электроника и бытовая техника", id: "tech", isCurrent: false}, 
      {name: "Зоотовары", id: "zoo", isCurrent: false}, 
      {name: "Кино и театр", id: "cinema", isCurrent: false}, 
    ],
    listFull: [
      {name: "Путешествия", id: "travel", isCurrent: false}, 
      {name: "Спорт", id: "sport", isCurrent: false}, 
      {name: "Развлечения", id: "rest", isCurrent: false} 
    ]
  };
}

