use aws_lambda_events::encodings::Body;
use aws_lambda_events::event::apigw::{ApiGatewayProxyResponse};
use http::{header::HeaderMap};
use lambda_runtime::{service_fn, LambdaEvent, Error};
use log::LevelFilter;
use simple_logger::SimpleLogger;

#[tokio::main]
async fn main() -> Result<(), Error> {
    SimpleLogger::new()
        .with_level(LevelFilter::Info)
        .init()
        .unwrap();

    let func = service_fn(my_handler);
    lambda_runtime::run(func).await?;
    Ok(())
}

pub(crate) async fn my_handler(
    _event: LambdaEvent<()>,//ApiGatewayProxyRequest,
    //_ctx: Context,
) -> Result<ApiGatewayProxyResponse, Error> {
    //let path = event.path.unwrap();

    let resp = ApiGatewayProxyResponse {
        status_code: 200,
        headers: HeaderMap::new(),
        multi_value_headers: HeaderMap::new(),
        body: Some(Body::Text(format!("Hello from xxx, path"))),
        is_base64_encoded: Some(false),
    };

    Ok(resp)
}
