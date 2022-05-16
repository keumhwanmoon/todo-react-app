import React from 'react';
import {
  ListItem,
  ListItemText,
  InputBase,
  Checkbox,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item, readOnly: true };
    this.delete = props.delete;
  }

  componentDidMount() {
    console.log("Todo Component is Mounted!");
  }

  clickDone = () => {
    const thisItem = this.state.item;
    thisItem.done = !thisItem.done;
    this.setState({item: thisItem}, () => {
      console.log("item :: ", thisItem);
    });
  }

  offReadOnlyEventHandler = () => {
    console.log("Event before :: readOnly is ", this.state.readOnly);
    this.setState({ readOnly: false }, () => {
        console.log("Event after :: readOnly is ", this.state.readOnly);
      }
    );
    
  }

  editEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
  }

  enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      console.log("Key Pressed :: ", e.key);
      this.setState({ readOnly: true });
    }
  }

  deleteEventHandler = () => {
    this.delete(this.state.item);
  }

  render() {
    const item = this.state.item;
    return (
      <ListItem>
        <Checkbox checked={item.done} onChange={this.clickDone}/>
        <ListItemText>
          <InputBase
          inputProps={
            {
              "aria-label": "naked",
              "readOnly": this.state.readOnly
            }
          }
          type="text"
          id={String(item.id)}
          name={String(item.id)}
          value={item.title}
          multiline={true}
          fullWidth={true}
          onClick={this.offReadOnlyEventHandler}
          onChange={this.editEventHandler}
          onKeyPress={this.enterKeyEventHandler}
        />
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
          aria-label="Delete Todo"
          onClick={this.deleteEventHandler}
          >
            <DeleteOutlined/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default Todo;