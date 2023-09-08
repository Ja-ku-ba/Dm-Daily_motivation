import React from 'react'

const Tracker = () => {
  return (
    <div className='Tracker'>
		<div class="year-stats">
			<div class="month-group">
				<div class="bar h-100"></div>
				<p class="month">Jan</p>
			</div>
			<div class="month-group">
				<div class="bar h-50"></div>
				<p class="month">Feb</p>
			</div>
			<div class="month-group">
				<div class="bar h-75"></div>
				<p class="month">Mar</p>
			</div>
			<div class="month-group">
				<div class="bar h-25"></div>
				<p class="month">Apr</p>
			</div>
			<div class="month-group selected">
				<div class="bar h-100"></div>
				<p class="month">May</p>
			</div>
			<div class="month-group">
				<div class="bar h-50"></div>
				<p class="month">Jun</p>
			</div>
			<div class="month-group">
				<div class="bar h-75"></div>
				<p class="month">Jul</p>
			</div>
			<div class="month-group">
				<div class="bar h-25"></div>
				<p class="month">Aug</p>
			</div>
			<div class="month-group">
				<div class="bar h-50"></div>
				<p class="month">Sep</p>
			</div>
			<div class="month-group">
				<div class="bar h-75"></div>
				<p class="month">Oct</p>
			</div>
			<div class="month-group">
				<div class="bar h-25"></div>
				<p class="month">Nov</p>
			</div>
			<div class="month-group">
				<div class="bar h-100"></div>
				<p class="month">Dez</p>
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