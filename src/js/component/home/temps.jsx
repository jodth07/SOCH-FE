<div className="row featurette">
	<div
		className={
			props.isReverse
				? "col-md-7 order-md-2 my-auto"
				: "col-md-7 my-auto"
		}>
		<h2
			className="featurette-heading"
			style={{ fontWeight: "400", fontSize: "50px" }}>
			{props.product.name}
			<br />
			<span className="text-muted">${props.product.price}</span>
		</h2>
		<p style={{ fontSize: "1.6rem" }}>
			{props.product.description}
		</p>
		{props.button}
	</div>

	<div className="col-md-5">
		<img
			className="featurette-image img-fluid mx-auto"
			data-src="holder.js/500x500/auto"
			alt="500x500"
			style={{ width: "500px", height: "500px" }}
			src={props.product.image}
			data-holder-rendered="true"
		/>
	</div>
	
</div>

<div className="container mt-4">
	{/* <div className="col-md-6"> */}
	<div className="card flex-md-row mb-4 box-shadow h-md-250">
		<div className="card-body d-flex flex-column align-items-start">
			<strong className="d-inline-block mb-2 text-primary">
				World
			</strong>
			<h3 className="mb-0">
				<a className="text-dark" href="#">
					Featured post
				</a>
			</h3>
			<div className="mb-1 text-muted">Nov 12</div>
			<p className="card-text mb-auto">
				This is a wider card with supporting text below as a
				natural lead-in to additional content.
			</p>
			<a href="#">Continue reading</a>
		</div>
		<img
			className="card-img-right flex-auto d-none d-md-block"
			data-src="holder.js/200x250?theme=thumb"
			alt="Card image cap"
		/>
		{/* </div> */}
	</div>

	<div className="card flex-md-row mb-4 box-shadow h-md-250">
		<div className="card-body d-flex flex-column align-items-start">
			<strong className="d-inline-block mb-2 text-primary">
				World
			</strong>
			<h3 className="mb-0">
				<a className="text-dark" href="#">
					Featured post
				</a>
			</h3>
			<div className="mb-1 text-muted">Nov 12</div>
			<p className="card-text mb-auto">
				This is a wider card with supporting text below as a
				natural lead-in to additional content.
			</p>
			<a href="#">Continue reading</a>
		</div>
		<img
			className="card-img-right flex-auto d-none d-md-block"
			data-src="holder.js/200x250?theme=thumb"
			alt="Card image cap"
		/>
		{/* </div> */}
	</div>

	<div className="card flex-md-row mb-4 box-shadow h-md-250">
		<div className="card-body d-flex flex-column align-items-start">
			<strong className="d-inline-block mb-2 text-success">
				Design
			</strong>
			<h3 className="mb-0">
				<a className="text-dark" href="#">
					Post title
				</a>
			</h3>
			<div className="mb-1 text-muted">Nov 11</div>
			<p className="card-text mb-auto">
				This is a wider card with supporting text below as a
				natural lead-in to additional content.
			</p>
			<a href="#">Continue reading</a>
		</div>
		<img
			className="card-img-right flex-auto d-none d-md-block"
			data-src="holder.js/200x250?theme=thumb"
			alt="Card image cap"
		/>
	</div>
</div>