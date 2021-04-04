import React, { Component } from 'react'


class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            item: "Hello",
            todoItem: []
        }

        this.onchangeHeandler = this.onchangeHeandler.bind(this)
        this.addItem = this.addItem.bind(this)
        this.delete = this.delete.bind(this)
    }
    // this.onchangeHeandler = this.onchangeHeandler(bind).this

    onchangeHeandler(event) {
      //  console.log(event);
        var curval = event.target.value;
        //console.log(curval)
        this.setState({

            item: curval
        })
    }
    addItem() {
        var curval11 = this.state.item; //onchange currrent value
        //console.log(curval11)
        var iteminstance = this.state.todoItem //empty array
       // console.log(iteminstance)
        iteminstance.push(curval11) //empty array push value
        this.setState({
        todoItem: iteminstance, //set value to original empty array
        item :''// to keep blank

            // item:curval11,
            // console.log(inteminstance)
            //todoItem :this.state.item
           
        })
 console.log(this.state.todoItem)
    }

    delete(event){

        var id = event.target.id;
       // console.log(id)
       var iteminstance = this.state.todoItem //empty array
       iteminstance.splice(id,1)
       this.setState({
        todoItem: iteminstance //set value to original empty array
       })
    }
    render() {

        var listitem = this.state.todoItem.map((eve,indx)=>
            <li key ={indx}> {eve} <span onClick ={this.delete} id ={indx}> X </span></li>
        )
        return (

            <div>
                <div className="Header">To to App In React</div>
                <div className="Body">
                    <ul>
                        {listitem}
                    </ul>
                </div>
                <div className="Footer">
                    <input type="text" value={this.state.item} onChange={this.onchangeHeandler} />
                    <p>{this.state.item}</p>
                    <button onClick={this.addItem}>+</button>
                </div>
            </div>

        );

    }
}


export default Todo;