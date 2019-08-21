<section id="ordens">
  <h2>
    Ordens
  </h2>
  <br />
  <h3>Fluxo de ordens</h3>
  <img src="/assets/imgs/fluxo_ordem.png" class="img-fluid" />
  <br />
  <br />
  <br />
  <p>
    As ordens são eventos executados pela carteira com o objetivo de
    fornecer diversas funções aos usuários. Cada ordem possui um
    ciclo de vida desde sua criação até sua finalização. Quando uma
    ordem nasce ela pode atingir 2 (dois) status diferentes que são:
  </p>
  <ul>
    <li>
      <code>DENIED</code>: A ordem foi recusada pela carteira, por
      diferentes motivos.
    </li>
    <li>
      <code>AUTHORIZED</code>: A ordem foi aceita pela carteira e
      aguarda uma confirmação de captura ou cancelamento.
    </li>
  </ul>

  <p>
    Após a autorização da ordem, ela poderá seguir para o status de
    <code>CAPTURED</code>.
  </p>
  <p>
    Após a ordem ser capturada, ela pode seguir para 5 (cinco)
    status diferentes que são:
  </p>

  <ul>
    <li>
      <code>SUCCESS</code>: Ordem aceita e finalizada com sucesso,
      que significa que todas as cobranças foram realizadas.
    </li>
    <li>
      <code>CANCELED</code>: A Ordem foi criada, autorizada e
      capturada com sucesso, porém por motivos externos, ela deve
      ser cancelada e todas as cobranças desfeitas.
    </li>
    <li>
      <code>HOLD</code>: A Ordem está aguardando um processamento
      externo para sua conclusão, geralmente acontece com estorno no
      cartão de crédito cujo a Ame aguarda a confirmação do sistema
      bancário.
    </li>
    <li>
      <code>REFUNDED</code>: A Ordem foi capturada porém o usuário
      deseja receber de volta parte do valor ou o valor total da
      ordem realizada.
    </li>
    <li>
      <code>ERROR</code>: Ocorreu um erro inesperado durante o
      processamento da transação, considere esta transação como
      <code>DENIED</code>. A Ame Digital se certificará de desfazer
      quaisquer inconsistência.
    </li>
  </ul>
  <br />
  {% include /pt-br/orders/create.md %}
  {% include /pt-br/orders/auth.md %}
  {% include /pt-br/orders/capturing.md %}
  {% include /pt-br/orders/searching.md %}
  {% include /pt-br/orders/canceling.md %}
  {% include /pt-br/orders/refunding.md %}
</section>
<br />
<br />
