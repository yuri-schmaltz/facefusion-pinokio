const { envPath, onError } = require('./utils');
const { FACEFUSION_VERSION } = require('./config');

function install(kernel)
{
	const { platform, gpu } = kernel;

	if (platform === 'linux' && gpu === 'amd')
	{
		return 'python install.py --onnxruntime rocm';
	}
	if (platform === 'win32' && gpu === 'amd')
	{
		return 'python install.py --onnxruntime directml';
	}
	if ((platform === 'linux' || platform === 'win32') && gpu === 'intel')
	{
		return 'python install.py --onnxruntime openvino';
	}
	if ((platform === 'linux' || platform === 'win32') && gpu === 'nvidia')
	{
		return 'python install.py --onnxruntime cuda';
	}
	return 'python install.py --onnxruntime default';
}

module.exports = async kernel =>
{
	const config =
	{
		run:
		[
			{
				method: 'shell.run',
				params:
				{
					message: 'git clone https://github.com/facefusion/facefusion --branch ' + FACEFUSION_VERSION + ' --single-branch',
					on: onError
				}
			},
			{
				method: 'shell.run',
				params:
				{
					message: 'conda install conda=25.5.1 --yes',
					on: onError
				}
			},
			{
				method: 'shell.run',
				params:
				{
					message: 'conda install conda-forge::ffmpeg=7.0.2 conda-forge::libvorbis=1.3.7 --yes',
					conda:
					{
						path: envPath
					},
					on: onError
				}
			},
			{
				when: '{{ (platform === "linux" || platform === "win32") && gpu === "intel" }}',
				method: 'shell.run',
				params:
				{
					message: 'conda install conda-forge::openvino=2025.1.0 --yes',
					conda:
					{
						path: envPath
					},
					on: onError
				}
			},
			{
				when: '{{ (platform === "linux" || platform === "win32") && gpu === "nvidia" }}',
				method: 'shell.run',
				params:
				{
					message:
					[
						'conda install nvidia/label/cuda-12.9.1::cuda-runtime nvidia/label/cudnn-9.10.0::cudnn --yes',
						'pip install tensorrt==10.12.0.36 --extra-index-url https://pypi.nvidia.com'
					],
					conda:
					{
						path: envPath
					},
					on: onError
				}
			},
			{
				method: 'shell.run',
				params:
				{
					message: install(kernel),
					path: 'facefusion',
					conda:
					{
						path: envPath
					},
					on: onError
				}
			},
			{
				method: 'input',
				params:
				{
					title: 'Installation completed',
					description: 'Return to the dashboard to start FaceFusion.'
				}
			},
			{
				method: 'browser.open',
				params:
				{
					uri: '/?selected=facefusion'
				}
			}
		]
	};

	return config;
};
