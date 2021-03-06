import React, {PropTypes} from 'react';
import Results from './components/Results.component';
import TextInput from './components/TextInput.component';

const FuelSavingsApp = (props) => {
  const settings = props.fuelSavingsAppState;

  const fuelSavingsKeypress = function(name, value) {
    props.actions.calculateFuelSavings(props, name, value);
  };

  const onTimeframeChange = function(e) {
    props.actions.calculateFuelSavings(props, 'milesDrivenTimeframe', e.target.value);
  };

  const save = function() {
    props.actions.saveFuelSavings(props.fuelSavingsAppState);
  };

  return (
    <div>
      <h2>Fuel Savings Analysis</h2>
      <table>
        <tbody>
        <tr>
          <td><label htmlFor="newMpg">New Vehicle MPG</label></td>
          <td><TextInput onChange={fuelSavingsKeypress} name="newMpg" value={settings.newMpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="tradeMpg">Trade-in MPG</label></td>
          <td><TextInput onChange={fuelSavingsKeypress} name="tradeMpg" value={settings.tradeMpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="newPpg">New Vehicle price per gallon</label></td>
          <td><TextInput onChange={fuelSavingsKeypress} name="newPpg" value={settings.newPpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="tradePpg">Trade-in price per gallon</label></td>
          <td><TextInput onChange={fuelSavingsKeypress} name="tradePpg" value={settings.tradePpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="milesDriven">Miles Driven</label></td>
          <td>
            <TextInput onChange={fuelSavingsKeypress} name="milesDriven" value={settings.milesDriven} /> miles per
            <select name="milesDrivenTimeframe" onChange={onTimeframeChange} value={settings.milesDrivenTimeframe}>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </td>
        </tr>
        <tr>
          <td><label>Date Modified</label></td>
          <td>{settings.dateModified}</td>
        </tr>
        </tbody>
      </table>

      <hr/>

      {settings.necessaryDataIsProvidedToCalculateSavings ? <Results savings={settings.savings} /> : null}
      <input type="submit" value="Save" onClick={save} />
    </div>
  );
};

FuelSavingsApp.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavingsAppState: PropTypes.object.isRequired
};

export default FuelSavingsApp;
