import React from 'react';
import './Plateau.css';
import { FancyHeader } from '../fancy-header/FancyHeader';

interface Plate {
  type: string;
  city: string;
  code: number;
}

interface PlateauState {
  plates: Plate[];
}

export class Plateau extends React.Component {
  
  state: PlateauState = {
    plates: []
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    fetch('plates.json').then(res => res.json()).then(plates => {
      this.setState({
        plates: plates
      })
    })
  }

  render() {
    return (
      <table>
        <FancyHeader>
          <tr>
            <th>City</th>
            <th>Type</th>
            <th>Code</th>
          </tr>
        </FancyHeader>
        <tbody>
          {this.state.plates.map((plate: Plate) => (
              <tr key={plate.code}>
                <td>{plate.city}</td>
                <td>{plate.type}</td>
                <td>{plate.code}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    )
  }
}