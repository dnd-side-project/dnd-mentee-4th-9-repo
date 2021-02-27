import {KAKAO_KEY} from '../const/config';

const {Kakao} = window;

export default function initialize() {
  Kakao.init(KAKAO_KEY);
}
