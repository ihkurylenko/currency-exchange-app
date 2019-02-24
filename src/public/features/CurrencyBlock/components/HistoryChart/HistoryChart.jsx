import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Line } from 'react-chartjs-2';

import { reset } from 'public/features/CurrencyBlock/actions/getHistoryRates';
import { HistoryBlockStyled } from './styles';

const HistoryChart = ({ dates, currencyTo, rates, reset }) => {
  React.useEffect(() => {
    return () => reset();
  }, []);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: currencyTo,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: rates
      }
    ]
  };

  return (
    <HistoryBlockStyled>
      <Line data={chartData} />
    </HistoryBlockStyled>
  );
};

const mapStateToProps = ({ historyRates }) => ({
  rates: historyRates.response.arrayOfRates,
  dates: historyRates.response.arrayOfDates
});

const mapDispatchToProps = dispatch => bindActionCreators({ reset }, dispatch);

const HistoryChartConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryChart);

export { HistoryChartConnect as HistoryChart };
