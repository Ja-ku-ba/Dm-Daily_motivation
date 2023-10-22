import React from 'react'

const Tracker = () => {
  return (
    <div className='Tracker'>
		<div className="year-stats">
			<div className="month-group">
				<div className="bar h-100"></div>
				<p className="month">Jan</p>
			</div>
			<div className="month-group">
				<div className="bar h-50"></div>
				<p className="month">Feb</p>
			</div>
			<div className="month-group">
				<div className="bar h-75"></div>
				<p className="month">Mar</p>
			</div>
			<div className="month-group">
				<div className="bar h-25"></div>
				<p className="month">Apr</p>
			</div>
			<div className="month-group selected">
				<div className="bar h-100"></div>
				<p className="month">May</p>
			</div>
			<div className="month-group">
				<div className="bar h-50"></div>
				<p className="month">Jun</p>
			</div>
			<div className="month-group">
				<div className="bar h-75"></div>
				<p className="month">Jul</p>
			</div>
			<div className="month-group">
				<div className="bar h-25"></div>
				<p className="month">Aug</p>
			</div>
			<div className="month-group">
				<div className="bar h-50"></div>
				<p className="month">Sep</p>
			</div>
			<div className="month-group">
				<div className="bar h-75"></div>
				<p className="month">Oct</p>
			</div>
			<div className="month-group">
				<div className="bar h-25"></div>
				<p className="month">Nov</p>
			</div>
			<div className="month-group">
				<div className="bar h-100"></div>
				<p className="month">Dez</p>
			</div>
		</div>
        <div className='legend'>
            <span className='done'>Done</span>
            <span className='undone'>Undone</span>
        </div>
	</div>
  )
}

export default Tracker