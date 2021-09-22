<template>
  <div class="culculator">
    <h1>{{ msg }}</h1>
   <div class="basic-calculator">
     <div class="display">{{number || '0'}}</div>
     <div  @click="clear" class="btn clear">C</div>
     <div @click="remove" class="btn remove">Del</div>
     <div  @click="append('7')" class="btn">7</div>
     <div @click="append('8')" class="btn">8</div>
     <div @click="append('9')" class="btn">9</div>
     <div @click="mul" class="btn">*</div>
     <div @click="append('4')" class="btn">4</div>
     <div @click="append('5')" class="btn">5</div>
     <div @click="append('6')" class="btn">6</div>
     <div @click="sub" class="btn">-</div>
     <div @click="append('1')" class="btn">1</div>
     <div @click="append('2')" class="btn">2</div>
     <div @click="append('3')" class="btn">3</div>
     <div @click="add" class="btn">+</div>
     <div @click="append('0')" class="btn">0</div>
     <div @click="dev" class="btn">/</div>
     <div @click="equal() , addItem()"  class="btn">=</div>
     
     
   </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'App',
    data(){
    return {
      prevNum:null,
      number:'',
      operator:null,
      operatorClicked:false,
      type:''
    }
  },
  

 methods: {
   
    clear(){
      this.number=''
    },
    append(num){
      if(this.operatorClicked){
        this.number=''
        this.operatorClicked=false
      }
      this.number=`${this.number}${num}`
    },
    remove(){
    this.number=this.number.slice(0,-1)
    },
    setPrevNum(){
      this.prevNum=this.number
      this.operatorClicked=true
      
    },
    add(){
      this.operator=(a,b)=>a+b
      this.setPrevNum()
      this.type='+'
    },
    sub(){
      this.operator=(a,b)=>a-b
      this.setPrevNum()
      this.type='-'
    },
    mul(){
      this.operator=(a,b)=>a*b
      this.setPrevNum()
      this.type='*'
    },
    dev(){
      this.operator=(a,b)=>a/b
      this.setPrevNum()
      this.type='/'
    },
    
    equal(){
      this.number=`${this.operator(parseFloat(this.prevNum), parseFloat(this.number))}`
      this.prevNum=''
    },
    
   
   
    async addItem() {
      const response = await axios.post("127.0.0.1:8000/api/v1/cal", {
        numberA: this.preNumber,
        numberB:this.number,
        operator:this.type
      })
    }
    
    
    
    
  }
  
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.basic-calculator{
  display: grid;
grid-template-columns: repeat(4,1fr);
grid-auto-rows: minmax(50px, auto);
margin: 0 auto;
width: 400px;
font-size: 40px;
}

.display{
  grid-column: 1/5;
  background-color: #333 !important;
  color: #fff;
}

.clear{
  grid-column: 1/3;
}

.remove{
  grid-column: 3/5;
}

.btn{
  background-color: white;
  border: 1px solid #999;
  cursor: pointer;
}

.operator{
  background-color: rgb(49, 120, 148);
  color:#fff
}
</style>


