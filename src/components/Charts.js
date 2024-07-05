import 'chart.js/auto';
import { Chart, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { useRef,useEffect } from 'react';
import { FaCircle } from "react-icons/fa";

Chart.register(LineElement, PointElement, LinearScale, Title, CategoryScale);


export const BarChart = ({ aqi }) => {
  const chartRefs = useRef([]);

  useEffect(() => {
    // Önceki grafiklerin temizlenmesi
    chartRefs.current.forEach((ref, index) => {
      if (ref.chartInstance) {
        ref.chartInstance.destroy();
      }
    });

    // Yeni grafiklerin oluşturulması
    chartRefs.current.forEach((ref, index) => {
      if (ref) {
        const ctx = ref.getContext('2d');
        ref.chartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: [""],
            datasets: [{
              label: aqi[index].name,
              data: [aqi[index].value],
              backgroundColor: '#4299E1',
              borderColor: '#2B6CB0',
              borderWidth: 0,
              maxBarThickness: 50,
              borderRadius: { topLeft: 20, topRight: 20, bottomLeft: 20, bottomRight: 20 }
            }],
          },
          options: {
            aspectRatio: 2,
            indexAxis: 'x',
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: false,
              },
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                beginAtZero: true,
                display: false,
                ticks: {
                  display: false,
                },
              }
            },
            layout: {
              padding: {
                top: 0,
              }
            },
          },
        });
      }
    });
  }, [aqi]);

  return (
    <div className="flex gap-x-1 xl:gap-x-10 lg:gap-x-2 md:gap-x-2 ml-2 xl:ml-24 lg:ml-2 md:ml-2">
      {aqi.map((data, index) => (
        <div className="flex flex-col items-center rounded-xl w-[115px] h-[225px] xl:w-[300px] xl:h-[325px] lg:w-[200px] lg:h-[275px] md:w-[200px] md:h-[275px] bg-white relative pt-44 pr-24" key={index}>
          <h2 className="text-md font-md md:text-xl md:font-bold absolute top-3 left-2">{data.name}</h2>

          <div className="absolute top-0 left-0 w-full h-full rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden">
          <div className='flex'>
              <div className="h-[150px] mt-[60px] ml-[3px] xl:mt-[60px] xl:ml-[44px] lg:mt-[60px] lg:ml-[12px] md:mt-[60px] md:ml-[12px] rounded-t-3xl  w-[53px] xl:w-[50px] xl:h-[250px] lg:w-[50px] lg:h-[200px] md:w-[50px] md:h-[200px]" style={{ backgroundColor: 'rgb(147 197 253)' }}></div>
              <h2 className="text-sm xl:text-5xl lg:text-3xl md:text-3xl md:pt-20 md:pl-8 pt-16 pl-2 font-bold  text-blue-500">{data.value} {data.smg}</h2>
          </div>
        <div className='flex'>
          <canvas ref={(el) => (chartRefs.current[index] = el)} className="absolute bottom-4 right-7 xl:absolute xl:bottom-4 xl:right-20 lg:absolute lg:bottom-4  lg:right-16 md:absolute md:bottom-4  md:right-16 rounded-3xl"></canvas>
            </div>
          </div>

          <div className='flex flex-col rounded-lg text-sm text-opacity-40 w-[40px] xl:w-[100px] lg:w-[80px] md:w-[80px] gap-x-1 items-center absolute bottom-4 right-2 justify-center h-[80px] md:h-[130px] bg-slate-200 xl:absolute xl:bottom-4 xl:right-10 lg:absolute lg:bottom-4 lg:right-5 '>
             <button className='w-[30px] h-[20px] xl:w-[90px] xl:h-[30px] lg:w-[70px] lg:h-[30px] md:w-[70px] md:h-[30px] rounded-lg bg-slate-200 cursor-pointer '>1H</button>
             <button className='w-[30px] h-[20px] xl:w-[90px] xl:h-[30px] lg:w-[70px] lg:h-[30px] md:w-[70px] md:h-[30px] rounded-lg bg-slate-50 cursor-pointer '>1D</button>
             <button className='w-[30px] h-[20px] xl:w-[90px] xl:h-[30px] lg:w-[70px] lg:h-[30px] md:w-[70px] md:h-[30px] rounded-lg bg-slate-200 cursor-pointer '>1W</button>
             <button className='w-[30px] h-[20px] xl:w-[90px] xl:h-[30px] lg:w-[70px] lg:h-[30px] md:w-[70px] md:h-[30px] rounded-lg bg-slate-200 cursor-pointer '>1M</button>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export const BarChartWqi = ({ wqi }) => {
  const chartRefs = useRef([]);

  useEffect(() => {
    // Önceki grafiklerin temizlenmesi
    chartRefs.current.forEach((ref, index) => {
      if (ref.chartInstance) {
        ref.chartInstance.destroy();
      }
    });
    const colors = ["#ffffff","#4299E1","#4299E1"]
    // Yeni grafiklerin oluşturulması
    chartRefs.current.forEach((ref, index) => {
      if (ref) {
        const ctx = ref.getContext('2d');
        ref.chartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: [""],
            datasets: [{
              label: wqi[index].name,
              data: [wqi[index].value],
              backgroundColor: colors[index],
              borderColor: '#2B6CB0',
              borderWidth: 0,
              maxBarThickness: 30,
              borderRadius: { topLeft: 20, topRight: 20, bottomLeft: 20, bottomRight: 20 }
              
            }],
          },
          options: {
            aspectRatio: 2,
            indexAxis: 'y',
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: false,
              },
              
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                beginAtZero: true,
                display: false,
                ticks: {
                  display: false,
                },
               
              }
            },
            layout: {
              padding: {
                top: 20,
              }
            },
          },
        });
      }
    });
  }, [wqi]);

  return (

    <div className="flex flex-col gap-y-8 relative">
      {wqi.map((w, index) => (
        <div key={index} className="ml-0 xl:ml-28 lg:ml-0 md:ml-0 w-[450px] h-[200px] xl:w-[1300px] xl:h-[200px] lg:w-[710px] lg:h-[200px] md:w-[700px] md:h-[200px] rounded-3xl relative mb-5 bg-white">
        <div className='flex '>
          <h2 className="absolute top-5 left-10 font-semibold text-2xl">{w.name}</h2>
          <div className='flex rounded-lg text-sm items-center text-opacity-40 w-[140px] gap-x-1 absolute top-7 right-10 justify-center h-[35px] bg-slate-200'>
             <button className='w-[40px] h-[30px] rounded-lg bg-slate-200 cursor-pointer '>1H</button>
             <button className='w-[40px] h-[30px] rounded-lg bg-slate-50 cursor-pointer '>1D</button>
             <button className='w-[40px] h-[30px] rounded-lg bg-slate-200 cursor-pointer '>1W</button>
             <button className='w-[40px] h-[30px] rounded-lg bg-slate-200 cursor-pointer '>1M</button>
          </div>
        </div>
          <h2 className="absolute bottom-5 left-10 font-semibold text-2xl text-blue-400">{w.value} {w.smg}</h2>
          {/* Doluluk oranı arka planı */}
          <div className="absolute top-0 left-0 w-full h-full rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden">
              {/* <div className="bg-blue-200 rounded-3xl" style={{ width: `${w.value}%`, height: '100%' }}></div> */}
              <div className="h-[32px] mt-[94px] xl:mt-[94px] lg:mt-[95px] md:mt-[95px] ml-10 rounded-tr-3xl rounded-br-3xl  w-[400px] xl:w-[1200px] xl:h-[32px] lg:w-[600px] lg:h-[30px] md:w-[600px] md:h-[30px]" style={{ backgroundColor: 'rgb(147 197 253)' }}></div>
          <canvas ref={(el) => (chartRefs.current[index] = el)} className="absolute top-0 pl-10 left-0 xl:absolute xl:top-0 xl:pl-10 xl:left-0 lg:absolute lg:top-0 lg:pl-10 lg:left-0 w-full h-full rounded-3xl"></canvas>
            </div>
          </div>
          {/* Canvas */}
        </div>
      ))}
    </div>
  );
};


export const DonutChart = ({ voc }) => {

  const chartRef = useRef(null);
  
  const colors = ['#4fd1c5', '#48bb78', '#38a169']
  useEffect(() => {


      const ctx = chartRef.current.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: voc.map(data => data.name),
          datasets: [{
            label: 'CO2',
            data: voc.map(data => data.value),
            backgroundColor: colors, 
            borderWidth: 0, // Kenar çizgisi kalınlığı
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: 'right',
            },
            title: {
              display: true,
              text: '',
            },
          },
          aspectRatio: 2,
        },
      });
      
      return () => {
        myChart.destroy();
      };
    }, [voc]);
    
    return (
      <div className="flex flex-col items-center relative ml-2 xl:ml-24 lg:ml-2 w-[235px] h-[225px] xl:w-[650px] xl:h-[325px] lg:w-[400px] lg:h-[275px] md:ml-2 md:w-[400px] md:h-[275px] bg-white rounded-xl">
        <h2 className='text-xl flex font-bold absolute  top-2 left-2'>VOC 
          <p className='text-sm font-semibold pt-1 pl-1'>(volatile organic compounds)</p>
        </h2>
        <div className='flex pt-16 pr-36 xl:pt-10 xl:pr-72 lg:pt-14 lg:pr-44 md:pt-14 md:pr-56 '>
        <canvas ref={chartRef} className="w-[200px] h-[50px] xl:w-[450px] xl:h-[200px] lg:w-[300px] lg:h-[100px] md:w-[300px] md:h-[50px]  "></canvas>
      <div className='flex flex-col pt-14 gap-y-1 xl:pr-20 xl:pt-20 lg:pr-10 lg:absolute lg:top-5 lg:-right-10 md:pr-10 md:absolute md:top-5 md:-right-8 pr-10 absolute top-5 -right-8 '>
          <div className='flex font-bold gap-x-3 pl-0 md:gap-x-5 md:pl-8 xl:gap-x-5 xl:pl-8 lg:gap-x-5 lg:pl-2 pb-3 '>
            <h2>Compound</h2>
            <h2>Amt</h2>
          </div>
         {voc.map((data,index) => (
         <div key={index} className='flex md:gap-x-8 gap-x-2 md:text-xl text-sm relative'>
          <div className="relative md:mr-3 mr-5">
             <FaCircle size={20} color={colors[index]} className="absolute top-[18%] left-[0%]" />
          </div>
            <h3 className=' text-left'>{data.name}</h3>
            <h3 className=''>{data.value}%</h3>
              
         </div>
         ))}
      </div>
    </div>
  </div>
  );
};


export const LineChart2 = () => {
  const chartRef = useRef(null);

useEffect(() => {
  const ctx = chartRef.current.getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [10, 20, 30, 40, 50],
      datasets: [{
        label: 'CO2',
        data: [10, 20, 30, 40, 50],
        fill: false,
        borderColor: 'rgb(75, 192, 215)',
        tension: 0,
        
      }]
    },
    options: {
      responsive: true,
      aspectRatio: 2,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        title: {
          display: true,
          text: '',
        },
      },
      scales: {
        x: {
          
          grid: {
            display: false, // X eksenindeki grid çizgilerini kaldır
          },
        },
        y: {
          grid: {
            display: false, // X eksenindeki grid çizgilerini kaldır
          },
          ticks: {
            display: false, // Y eksenindeki veri etiketlerini gizle
          },
        }
      }
    }
  });

  return () => {
    myChart.destroy();
  };
}, []);

return (
  <div className="flex flex-col items-center relative xl:pt-0 lg:pt-10 md:pt-10 pt-10 ">
    <h2 className="text-xl font-bold absolute top-3 left-2 ">CO2</h2>
    <canvas ref={chartRef} className="max-w-xl w-full h-24"></canvas>
    <div className='flex gap-x-10 xl:gap-x-44 lg:gap-x-32 md:gap-x-32 absolute left-5 -bottom-14 md:absolute md:left-5 md:-bottom-10'>
   <p className='text-sm '>Current:</p>
   <p className='text-sm '>Condition:</p>
   </div>
  </div>
);
}


const LineChart = () => {
const chartRef = useRef(null);

useEffect(() => {
  const ctx = chartRef.current.getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [10, 20, 30, 40, 50],
      datasets: [{
        label: 'PM2.5',
        data: [10, 20, 30, 40, 50],
        fill: false,
        borderColor: 'rgb(75, 192, 215)',
        tension: 0.1,
        
      }]
    },
    options: {
      aspectRatio: 2,
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        title: {
          display: true,
          text: '',
        },
      },
      scales: {
        x: {
          
          grid: {
            display: false, // X eksenindeki grid çizgilerini kaldır
          },
        },
        y: {
          grid: {
            display: false, // X eksenindeki grid çizgilerini kaldır
          },
          ticks: {
            display: false, // Y eksenindeki veri etiketlerini gizle
          },
        }
      }
    }
  });

  return () => {
    myChart.destroy();
  };
}, []);

return (
  <div className="flex flex-col items-center relative xl:pt-0 lg:pt-10 md:pt-10 pt-10 ">
    <h2 className="text-xl font-bold absolute top-3 left-2  ">PM 2.5</h2>
    <canvas ref={chartRef} className="max-w-xl w-full h-2"></canvas>
   <div className='flex gap-x-10 xl:gap-x-44 lg:gap-x-32 md:gap-x-32 absolute left-5 -bottom-14 md:absolute md:left-5 md:-bottom-10'>
   <p className='text-sm '>Current:</p>
   <p className='text-sm '>Condition:</p>
   </div>
  </div>
);
}

export default LineChart;