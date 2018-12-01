import React from "react";
import { Grid, Row, Col, Jumbotron, Button, Thumbnail, ProgressBar, Table } from "react-bootstrap";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const styles = {
  root: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    display: 'flex',
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    display: 'flex',
    paddingBottom: 20,
  },
};

const Info = (props) => {
  return (
    <div style={styles.root}>
      
      <p>
        <img src= { process.env.PUBLIC_URL + "Logo_line.png" } alt="" style={{ width: 300, height: 90 }} /> 
        <br />
        <br />
        <br />
        토타 프로젝트는 이오스 투표율을 올리기 위해 시작된 Dapp 프로젝트입니다.<br />
        <br />
        프록시는 EOS 내에 존재하는 정당과 같은 개념입니다. 프록시가 지지하는 BP 가 있고,<br />
        일반 유저가 프록시를 지지하게 된다면 나의 투표권한은<br />
        해당 프록시에서 지지하는 BP 를 자동으로 지지하게 됩니다.<br />
        <br />
        프록시를 지지하고 있으면, 지지하고 있는 프록시에 EOS 를 베팅할 수 있습니다.<br />
        자신이 베팅한 프록시가 이기길 원한다면, 친구들과 함께 해당 프록시를 지지하세요!<br />
        <br />
        <br />
        <h1><i>Enjoy Your ToTa</i></h1>
      </p>
    </div>
  );
};

export default Info;