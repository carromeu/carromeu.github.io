FROM ruby:3.3-slim

LABEL description="Imagem de desenvolvimento do site carromeu.com (Jekyll + multi-language-al-folio)"

ENV DEBIAN_FRONTEND=noninteractive

# dependências de sistema: compilação de gems nativas, ImageMagick (imagens responsivas),
# inotify (recarga automática), Node (execjs) e locale UTF-8
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
        build-essential \
        git \
        imagemagick \
        inotify-tools \
        locales \
        nodejs \
        procps \
        zlib1g-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/* /tmp/*

RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && locale-gen

ENV EXECJS_RUNTIME=Node \
    JEKYLL_ENV=production \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=en_US.UTF-8

WORKDIR /srv/jekyll

# instala as gems exatamente como travadas no Gemfile.lock (versionado)
COPY Gemfile Gemfile.lock /srv/jekyll/
RUN gem install --no-document bundler && \
    bundle install --no-cache

EXPOSE 8080 35729

COPY bin/entry_point.sh /tmp/entry_point.sh
RUN chmod +x /tmp/entry_point.sh

CMD ["/tmp/entry_point.sh"]
