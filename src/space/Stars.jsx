import Star from "./Star";

function Stars(){

    const stars=[];

    for(let i=0;i<120;i++){

        stars.push(

            <Star

                key={i}

                x={Math.random()*window.innerWidth}

                y={Math.random()*window.innerHeight}

                size={Math.random()*3+1}

            />

        );

    }

    return(

        <div className="stars">

            {stars}

        </div>

    );

}

export default Stars;