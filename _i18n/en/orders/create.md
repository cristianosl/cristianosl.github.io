<section id="criandoOrdem">
  <h3>Create an order</h3>
  <br />
  <div class="table-responsive">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="table-active text-center bg-light" colspan="2">
            <span class="badge badge-primary">POST</span>
            https://api.hml.amedigital.com/api/orders
          </th>
        </tr>
        <tr class="striped">
          <th class="table-active" colspan="2">
            HEADER PARAMETERS:
          </th>
        </tr>
        <tr>
          <th>
            Authorization:
            <br />
            <code>required</code>
          </th>
          <td>
            <code>string</code>
            <br />
            Example: <code>Bearer Token {ACCESS_TOKEN}</code>
            <br />
            Access token format <code>token_type</code> +
            <code>access_token</code> (Token type always is
            <b>Bearer</b>)
          </td>
        </tr>
        <tr>
          <th class="table-active" colspan="2">
            REQUEST BODY SCHEMA:
            <code>application/json</code>
          </th>
        </tr>
        <tr>
          <th>
            title
            <br />
            <code>optional</code>
          </th>
          <td>
            <code>string</code>
            <br />
            Order title, this value is free to use.
          </td>
        </tr>
        <tr>
          <th>
            description
            <br />
            <code>required</code>
          </th>
          <td>
            Order description, this value is free to use.
          </td>
        </tr>
        <tr>
          <th>
            amount
            <br />
            <code>required</code>
          </th>
          <td>
            <code>integer (int64)</code>
            <br />
            Order amount in cents. For example,
            <code>R$19,77</code> must be expressed as
            <code>1977</code> cents.
          </td>
        </tr>
        <tr>
          <th>
            type
            <br />
            <code>optional</code>
          </th>
          <td>
            <code>string</code>
            <br />
            Value: <code>PAYMENT</code> <br />
            Type of order that will be sent to the wallet.
          </td>
        </tr>
        <tr>
          <th>
            Attributes
            <br />
            <code>required</code>
          </th>
          <td>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>
                    cashbackAmountValue
                    <br />
                    <code>required</code>
                  </th>
                  <td>
                    <code>integer (int64)</code>
                    <br />
                    Cashback amount to be granted after
                    authorization
                  </td>
                </tr>
                <tr>
                  <th>
                    transactionChangedCallbackUrl
                    <br />
                    <code>required</code>
                  </th>
                  <td>
                    <code>string </code>
                    <br />URL Callback
                  </td>
                </tr>
                <tr>
                  <th>
                    items
                    <br />
                    <code>optional</code>
                  </th>
                  <td>
                    <code>Array of objects (item)</code>
                    <br />
                    <br />
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th>description</th>
                          <td>
                            <code>string</code>
                            <br />Item description
                          </td>
                        </tr>
                        <tr>
                          <th>quantity</th>
                          <td>
                            <code>integer (int64)</code>
                            <br />Item quantity
                          </td>
                        </tr>
                        <tr>
                          <th>amount</th>
                          <td>
                            <code>integer (int64)</code>
                            <br />Item amount. For example:
                            <code>3294</code> (R$32,94 in cents)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <h5>Responses</h5>
  <br />
  <div class="acoordion" id="accordionExample">
    <div class="card">
      <div class="card-header bg-ame-success text-success" id="heading200Create" data-toggle="collapse"
        data-target="#collapse200Create" aria-expanded="true" aria-controls="collapse200Create">
        <b>201</b> Order created successfully
      </div>
      <div id="collapse200Create" class="collapse show" aria-labelledby="heading200Create">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>id</th>
                  <td>
                    <code>string (uuid)</code>
                    <br />
                    Order ID
                  </td>
                </tr>
                <tr>
                  <th>title</th>
                  <td>
                    <code>string</code>
                    <br />
                    Order title, this value is free to use.
                  </td>
                </tr>
                <tr>
                  <th>description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Order description, this value is free to use.
                  </td>
                </tr>
                <tr>
                  <th>amount</th>
                  <td>
                    <code>integer (int64)</code>
                    <br />
                    Order amount in cents. For example:
                    <code>R$19,77</code> must be expressed as
                    <code>1977</code>
                    cents.
                  </td>
                </tr>
                <tr>
                  <th>type</th>
                  <td>
                    <code>string</code>
                    <br />
                    Value: <code>"PAYMENT"</code> <br />
                    Type of order that will be sent to the wallet.
                  </td>
                </tr>
                <tr>
                  <th>
                    Attributes
                    <br />
                    <code>required</code>
                  </th>
                  <td>
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th>
                            cashbackAmountValue
                            <br />
                          </th>
                          <td>
                            <code>integer (int64)</code>
                            <br />
                            Cashback amount to be granted after
                            authorization
                          </td>
                        </tr>
                        <tr>
                          <th>
                            transactionChangedCallbackUrl
                            <br />
                          </th>
                          <td>
                            <code>string </code>
                            <br />URL Callback
                          </td>
                        </tr>
                        <tr>
                          <th>
                            items
                            <br />
                          </th>
                          <td>
                            <code>Array of objects (item)</code>
                            <br />
                            <br />
                            <table class="table table-bordered">
                              <tbody>
                                <tr>
                                  <th>description</th>
                                  <td>
                                    <code>string</code>
                                    <br />Item description
                                  </td>
                                </tr>
                                <tr>
                                  <th>quantity</th>
                                  <td>
                                    <code>integer (int64)</code>
                                    <br />Item quantity
                                  </td>
                                </tr>
                                <tr>
                                  <th>amount</th>
                                  <td>
                                    <code>integer (int64)</code>
                                    <br />Item amount. For
                                    example: <code>3294</code>
                                    (R$32,94 in cents)
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <th>qrCodeLink</th>
                  <td>
                    <code>string</code>
                    <br />
                    URL to QRCode
                  </td>
                </tr>
                <tr>
                  <th>deepLink</th>
                  <td>
                    <code>string</code>
                    <br />
                    URL used to deep link iOS or Android apps
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading400Create" data-toggle="collapse"
        data-target="#collapse400Create" aria-expanded="true" aria-controls="collapse400Create">
        <b>400</b> Request parameters invalid
      </div>
      <div id="collapse400Create" class="collapse show" aria-labelledby="heading400Create">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading401Create" data-toggle="collapse"
        data-target="#collapse401Create" aria-expanded="true" aria-controls="collapse401Create">
        <b>401</b> Not authorized, access denied
      </div>
      <div id="collapse401Create" class="collapse show" aria-labelledby="heading401Create">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading403Create" data-toggle="collapse"
        data-target="#collapse403Create" aria-expanded="true" aria-controls="collapse403Create">
        <b>403</b> You don't have permission for this action
      </div>
      <div id="collapse403Create" class="collapse show" aria-labelledby="heading403Create">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading405Create" data-toggle="collapse"
        data-target="#collapse405Create" aria-expanded="true" aria-controls="collapse405Create">
        <b>405</b> Method not allowed
      </div>
      <div id="collapse405Create" class="collapse show" aria-labelledby="heading405Create">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading500Create" data-toggle="collapse"
        data-target="#collapse500Create" aria-expanded="true" aria-controls="collapse500Create">
        <b>5XX</b> Internal server error, try again. If the
        problem persists, contact technical support
      </div>
      <div id="collapse500Create" class="collapse show" aria-labelledby="heading500Create">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<br />
<br />