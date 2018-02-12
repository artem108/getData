import React, { Component } from 'react';
import MainComponent from '../components/Main'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as getData from '../modules/index'

class Main extends Component {

  componentWillMount() {
    const { getData } = this.props.getData
    const data = this.props.data
    getData(data)
  }
  render() {
    const { content } = this.props.data
    const { getData } = this.props.getData

    return (
      <section>
        <MainComponent
          data={content}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  getData: bindActionCreators(getData, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Main)
