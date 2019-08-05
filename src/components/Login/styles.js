import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    margin: theme.spacing(1),
  },
}));

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 5px;
  background: ${props => (props.background ? props.background : 'transparent')};
  width: 320px;
  height: 260px;
  h1 {
    color: #fff;
    margin-bottom: 12px;

  }

  p {
    color: #dff0ea;
    line-height: 20px;
  }

  h4 {
    color: #dff0ea;
    margin-top: 35px;
    margin-bottom: 10px;
  }
`;
