import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const ApiLoader = (props) => {
  if (props.loading === true) {
    return (
      <div className="loader-main-ctnr">
        <CircularProgress />
      </div>
    )
  }
  return null
}

const mapStateToProps = (state) => ({
  loading: state.app.apiLoading
})


export default connect(mapStateToProps, {})(ApiLoader);