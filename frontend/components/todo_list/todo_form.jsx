import { uniqueId } from '../../utils/idGenerator'
import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
      tag_names: [],
      tag: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTag = this.addTag.bind(this);
    this.handleTag = this.handleTag.bind(this);
  }

  handleTag(e) {
    this.setState({ tag: e.currentTarget.value });
  }

  addTag(e) {
    const allTags = this.state.tag_names.concat(this.state.tag);
    this.setState({ tag_names: allTags }, () => { this.setState({ tag: '' }); });
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });

    this.props.clearErrors();
    this.props.createTodo({todo}).then(
      () => this.setState({title: '', body: '', tag_names: []})
    ); // reset form
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="buy milk"
            onChange={this.update('title')}/>
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="2% or whatever is on sale!"
            onChange={this.update('body')}></textarea>
        </label>
        <br />
        <label>Tags:
          <ul>
          {this.state.tag_names.map((tag, idx) => <li key={idx}>{tag}</li>)}
          </ul>
          <input placeholder="Tag" onChange={this.handleTag} value={this.state.tag}></input>
          <button type="button" onClick={this.addTag}>Add</button>
        </label>
        <button className="create-button">Create Todo!</button>
        {this.props.errors.map((err, idx) => <p key={idx}>{err}</p>)}
      </form>
    );
  }
};

export default TodoForm;
