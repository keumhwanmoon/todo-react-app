import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: "" } }; // 사용자의 입력 저장용 Object
        this.add = props.add;
    }

    componentDidMount() {
        console.log("AddTodo Component is Mounted!");
      }

    changeTitle = (e) => {
        const thisItem = this.state.item;
        console.log(`title values is ${e.target.value}`)
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
        console.log(thisItem);
    }

    clickButtonAdd = (e) => {
        this.add(this.state.item);
        this.setState({item: {title: ""}});
    }

    pressEnterOnTitle = (e) => {
        if (e.key === 'Enter') {
            this.clickButtonAdd(e);
        }
    }

    render() {
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                        <TextField
                        placeholer="Add Todo here"
                        fullWidth
                        onChange={this.changeTitle}
                        onKeyPress={this.pressEnterOnTitle}
                        value={this.state.item.title}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        onClick={this.clickButtonAdd}
                        >
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default AddTodo;