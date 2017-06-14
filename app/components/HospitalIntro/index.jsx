import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HospitalIntro extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
           <div>
	           {
	           		this.props.data
	           		?	<div>
	           				<h1>上海玫瑰医疗美容医院</h1>
	           				<div>
	           					<p>医院介绍：</p>
	           					<p>医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍</p>
	           					<p>医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍</p>
	           					<p>医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍</p>
	           					<p>医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍</p>
	           					<p>医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍</p>
	           					<p>医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍</p>
	           					<p>医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍</p>
	           					<p>医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍</p>
	           					<p>医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍</p>
	           					<p>医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍</p>
	           					<p>医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍医院介绍</p>
	           				</div>
	           				<div>
	           					<p>医院环境</p>
	           					<div>
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           						<img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
	           					</div>
	           				</div>
	           			</div>
	           		: ''
	           }
           </div>
        )
    }
}

export default HospitalIntro