import AUD from 'shared/images/AUD.png';
import BGN from 'shared/images/BGN.png';
import BRL from 'shared/images/BRL.png';
import CAD from 'shared/images/CAD.png';
import CHF from 'shared/images/CHF.png';
import CNY from 'shared/images/CNY.png';
import CZK from 'shared/images/CZK.png';
import DKK from 'shared/images/DKK.png';
import HKD from 'shared/images/HKD.png';
import HRK from 'shared/images/HRK.png';
import HUF from 'shared/images/HUF.png';
import IDR from 'shared/images/IDR.png';
import INR from 'shared/images/INR.png';
import ILS from 'shared/images/ILS.png';
import ISK from 'shared/images/ISK.png';
import KRW from 'shared/images/KRW.png';
import MYR from 'shared/images/MYR.png';
import NOK from 'shared/images/NOK.png';
import NZD from 'shared/images/NZD.png';
import PHP from 'shared/images/PHP.png';
import PLN from 'shared/images/PLN.png';
import RON from 'shared/images/RON.png';
import RUB from 'shared/images/RUB.png';
import SEK from 'shared/images/SEK.png';
import SGD from 'shared/images/SGD.png';
import THB from 'shared/images/THB.png';
import TRY from 'shared/images/TRY.png';
import USD from 'shared/images/USD.png';
import ZAR from 'shared/images/ZAR.png';
import EUR from 'shared/images/EUR.png';
import GBP from 'shared/images/GBP.png';
import JPY from 'shared/images/JPY.png';
import MXN from 'shared/images/MXN.png';

export const imgDefiner = country => {
  switch (country) {
    case 'CAD':
      return CAD;
    case 'EUR':
      return EUR;
    case 'GBP':
      return GBP;
    case 'JPY':
      return JPY;
    case 'MXN':
      return MXN;
    case 'AUD':
      return AUD;
    case 'BGN':
      return BGN;
    case 'BRL':
      return BRL;
    case 'CHF':
      return CHF;
    case 'CNY':
      return CNY;
    case 'CZK':
      return CZK;
    case 'DKK':
      return DKK;
    case 'HKD':
      return HKD;
    case 'HRK':
      return HRK;
    case 'HUF':
      return HUF;
    case 'IDR':
      return IDR;
    case 'INR':
      return INR;
    case 'ILS':
      return ILS;
    case 'ISK':
      return ISK;
    case 'KRW':
      return KRW;
    case 'MYR':
      return MYR;
    case 'NOK':
      return NOK;
    case 'NZD':
      return NZD;
    case 'PHP':
      return PHP;
    case 'PLN':
      return PLN;
    case 'RON':
      return RON;
    case 'RUB':
      return RUB;
    case 'SEK':
      return SEK;
    case 'SGD':
      return SGD;
    case 'THB':
      return THB;
    case 'TRY':
      return TRY;
    case 'USD':
      return USD;
    case 'ZAR':
      return ZAR;
    default:
      return '';
  }
};

export const objToArr = obj => Object.keys(obj).map(key => ({ country: key, rate: obj[key] }));
