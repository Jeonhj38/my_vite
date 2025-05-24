import { useState } from 'react'
import './Home.css';

function handleClick(){
    setCount(count + 1)    // 사용은 첫번째, 변경은 두번째
}

function hTabClick(tabIndex){
    alert(tabIndex + '탭 눌림')
    // 변수에 넣어줌 (state변수)
}

return(
    <div>
        <div className="home_card">
            <button onClick={handleClick}>count is {count}</button>
            <div className='home_tab_container'>
                <TabButton 버튼명={'탭1'} 탭클릭={()=>{hTabClick(0)}}/>
                <TabButton 버튼명={'탭2'} 탭클릭={()=>{hTabClick(1)}}/>
                <TabButton 버튼명={'탭3'} 탭클릭={()=>{hTabClick(2)}}/>
                <TabButton 버튼명={'탭4'} 탭클릭={()=>{hTabClick(3)}}/>
            </div>
            <p>
                Edit <code>src/App.jsx</code> and save {selectedIndex}
            </p>
        </div>
    </div>
)