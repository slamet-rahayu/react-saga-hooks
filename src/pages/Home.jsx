import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../routes';


export default function Home() {
  const ReduxRoutes = Routes.filter(e => e.path.includes('redux'));
  const [data, setData] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [content, setContent] = React.useState([]);
  const [pages, setPages] = React.useState([]);

  React.useEffect(() => {
    const fetch = [
      {
        id: 1,
        name: 'slamet'
      },
      {
        id: 2,
        name: 'rahayu'
      },
    ]
    setData((prev) => [prev, fetch[0]]);
  }, []);

  React.useEffect(() => {
    axios({
      method: 'GET',
      url: '/id/portaljson',
    }).then((res) => {
      setCategory(res.data.result.categoryList);
      setContent(res.data.result.categories);
      setPages(res.data.result.categories[0]);
    })
  }, []);

  const handlePages = (id) => {
    const pages = content.filter((e) => e.id === id);
    setPages(pages[0]);
  }

  React.useEffect(() => {
    console.log({pages: pages.templates});
  }, [pages])

  return (
    <div>
      <div>
        <h2>Welcome Home</h2>
      </div>
      <div>
        <ul>
        <li><h2>Redux</h2></li>
        <ul>
          {ReduxRoutes.map((v) => {
            return (
              <li key={v.name}>
                <Link to={v.path}>{v.name}</Link>
              </li>              
            )
          })}
        </ul>
        </ul>
      </div>
      <div className="category">
        <ul>
          {category.map((v) => (
            <li key={v.id}>
              <a href="#" onClick={() => handlePages(v.id)}>{v.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <div className="row">
          {pages?.templates?.map((v) => v.title && (
            <React.Fragment key={v.title}>
              <div className="col-lg-12">
                <h5 className="mt-3 mb-3">{v.title}</h5>
                <div className="row">
                {v.sections[0].articles.map((s) => (
                  <div className="col-lg-4">
                    <div className="card mt-3 mb-3" style={{width: '18rem'}}>
                    <img src={`https://obs.line-scdn.net/${s.thumbnail.hash}/w580`} style={{objectFit: 'cover'}} height={200} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{s.title}</h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}