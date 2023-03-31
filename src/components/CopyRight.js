import { CgCopyright } from 'react-icons/cg';

function CopyRight() {
	return (
		<div className="copy-right-tags">
			<div className="copy-rights">
				<h2>
					<CgCopyright /> Developed by:
					<a
						href="https://developersanto.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						Developer<span>Santo.</span>
					</a>
				</h2>
			</div>
			<div className="links">
				<a
					className="github"
					href="https://github.com/DeveloperSantoGithub"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fas fa-brands fa-github"></i>
				</a>
				<a
					className="linkedin"
					href="https://www.linkedin.com/in/saidul-islam-santo"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fas fa-brands fa-linkedin-in"></i>
				</a>
			</div>
		</div>
	);
}

export default CopyRight;
