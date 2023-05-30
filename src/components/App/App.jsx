import { Component } from 'react';
import { Searchbar } from 'components/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as API from '../services/api';

export class App extends Component {
  state = {
    images: [],
  };

  async findImages(values) {
    const image = await API.findImages(values);
    console.log(image);
  }

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTtemplatColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101',
        // }}
      >
        <Searchbar onSubmit={this.findImages} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
