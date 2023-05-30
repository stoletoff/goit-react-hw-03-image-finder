import imgEror from 'components/img/sticker.webp';
import {ImgWrong} from './ImgErorView.styled'
export default function ImgErorView({ message }) {
  return (
    <ImgWrong role="alert">
      <img src={imgEror} width="240" alt="sadcat" />
      <p>{message}</p>
    </ImgWrong>
  );
}      