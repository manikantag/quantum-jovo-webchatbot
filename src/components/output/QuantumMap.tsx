import { MessageValue } from '@jovotech/client-web';
import { VFC } from 'react';

export interface QuantumMapProps {
  location: string;
}

const QuantumMap: VFC<QuantumMapProps> = (props) => {

  return (
    <div className="my-3 rounded w-full h-32">
      <iframe
        title='map-widget'
        style={{border:0}}
        loading="lazy"
        data-allowfullscreen={true}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBvFMm34StCaAOcBtt6GicITHm5NaIkuXs&q=Space+Needle,Seattle+WA">
      </iframe>
    </div>
  );
};

export default QuantumMap;
