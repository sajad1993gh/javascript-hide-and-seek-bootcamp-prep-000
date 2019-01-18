function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target' )
}
function increaseRankBy(n){
  const rank = document.querySelectorAll('.ranked-list')
     const firstList = rank[0]
      const secondList = rank[1]

      let children = firstList.children
      let start = 1
      for (let i = 0, l = rank.length; i < l; i++) {
        parseInt(rank[i].innerHTML) = start + i + 3 ;
      }
/*
      children = secondList.children
      start = 12

      for (let i = 0, l = children.length; i < l; i++) {
        parseInt(children[i].innerHTML) = start - i + 3
      }
      */
}

function deepestChild(){
     const child = document.querySelector('#grand-node div div div div')
    console.log(child.innerHTML)
}