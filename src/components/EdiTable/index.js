import {Component} from 'react'
import './index.css'

class EdiTable extends Component {
  state = {
    ediText: false,
    textInput: '',
  }

  onClickSaveButton = () => {
    this.setState({ediText: true})
  }

  onClickEditButton = () => {
    this.setState({ediText: false})
  }

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {ediText, textInput} = this.state
    return (
      <div className="app-container">
        {ediText ? (
          <div className="editable-container">
            <h1>Editable Text Input </h1>
            <div className="input-container">
              <p className="input-bar">{textInput}</p>
              <button
                type="button"
                className="button"
                onClick={this.onClickEditButton}
              >
                Edit
              </button>
            </div>
          </div>
        ) : (
          <div className="editable-container">
            <h1>Editable Text Input </h1>
            <div className="input-container">
              <input
                type="text"
                className="input-bar"
                onChange={this.onChangeInput}
                value={textInput}
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickSaveButton}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default EdiTable
