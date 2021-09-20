const People = (function(){
    let peopleDB = ['Ivan', 'Sergiy']
    let btn;
    let input;
    let ul;
    function init(){
        cacheDom()
        render()
        bindEvent()
    }
    function cacheDom(){
        btn = document.querySelector('#btn');
        input = document.querySelector('#user-input');
        ul = document.querySelector('#list')
    }
    function bindEvent() {
        btn.addEventListener('click', addPersonName);
        ul.addEventListener('click', event=>{
            delPersonName(event)
        })
    }
    function render() {
        let out = ''
        peopleDB.forEach(elem=>{
            out += `<li>${elem}-----x</li>`
        })
        ul.innerHTML = out;
    }
    function addPersonName(){
        if(input.value != '' && input.value != null){
            peopleDB.push(input.value.split('').map((elem,i) => i != 0 ? elem : elem.toUpperCase() + elem.slice(1)).join(''))
            render()
        }
        input.value = ''
    }
    function delPersonName(event) {
        let target = event.target
        let lis = ul.children;
        console.log(lis)
        console.log(target)
        for(let i = lis.length -1; i>=0; i--){
            if(lis[i] == target){
                peopleDB.splice(i,1)
            }
        }
        render()
    }
    return {
            init : init
        }
})();
People.init();